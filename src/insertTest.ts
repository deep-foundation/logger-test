import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { LOGGER_TEST_PACKAGE_NAME } from './package-name';

/**
 * Inserts a test link that is handled by the handler of this package to run tests for [logger](https://github.com/deep-foundation/logger) package
 * 
 * @example
 * #### Insert a test link
```ts
await insertTest({
  deep,
  containerLinkId
})
```
 */
export async function insertTest(param: InsertTestParam): Promise<InsertTestResult> {
  const { deep, containerLinkId } = param;

  const serialOperations: Array<SerialOperation> = [];

  const reservedLinkIds = await deep.reserve(1);
  const testLinkId = reservedLinkIds.pop();

  const testInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'links',
    objects: {
      type_id: await deep.id(LOGGER_TEST_PACKAGE_NAME, 'Test'),
    },
  });
  serialOperations.push(testInsertSerialOperation);

  if (containerLinkId !== null) {
    const containInsertSerialOperation = createSerialOperation({
      type: 'insert',
      table: 'links',
      objects: {
        type_id: await deep.id('@deep-foundation/core', 'Contain'),
        from_id: containerLinkId ?? deep.linkId,
        to_id: testLinkId,
      },
    });
    serialOperations.push(containInsertSerialOperation);
  }

  await deep.serial({
    operations: serialOperations,
  });

  return {
    testLinkId: testLinkId!,
  };
}

export interface InsertTestParam {
  /**
   * DeepClient instance
   */
  deep: DeepClient;
  /**
   * An if of a link where the test link will be contained
   */
  containerLinkId?: number | null;
}

export interface InsertTestResult {
   /**
    * An id of the test link
    */
   testLinkId: number;   
}