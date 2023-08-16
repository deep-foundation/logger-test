
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package.js';

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const testInsertHandlerCodeTypeLinkId = await package["TestInsertHandlerCode"].id();
const testTypeLinkId = await package["Test"].id();
const testInsertHandlerTypeLinkId = await package["TestInsertHandler"].id();
const handleTestInsertTypeLinkId = await package["HandleTestInsert"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const testInsertHandlerCodeTypeLinkId = package["TestInsertHandlerCode"].idLocal();
const testTypeLinkId = package["Test"].idLocal();
const testInsertHandlerTypeLinkId = package["TestInsertHandler"].idLocal();
const handleTestInsertTypeLinkId = package["HandleTestInsert"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const testInsertHandlerCode = package["TestInsertHandlerCode"].name;
const test = package["Test"].name;
const testInsertHandler = package["TestInsertHandler"].name;
const handleTestInsert = package["HandleTestInsert"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/logger-test',
    });
  }


      /**
      @example
      #### Use id method to get the id of the TestInsertHandlerCode link
      ```ts
      const package = new Package({deep});
      const testInsertHandlerCodeTypeLinkId = await package["TestInsertHandlerCode"].id();
      ```
      #### Use localId method to get the local id of the TestInsertHandlerCode link
      ```ts
      const package = new Package({deep});
      const testInsertHandlerCodeTypeLinkId = await package["TestInsertHandlerCode"].localId();
      ```
      #### Use name field to get the name of the TestInsertHandlerCode link
      ```ts
      const package = new Package({deep});
      const testInsertHandlerCode = await package["TestInsertHandlerCode"].name;
      ```
      */
      public "TestInsertHandlerCode" = this.createEntity("TestInsertHandlerCode");
      /**
      @example
      #### Use id method to get the id of the Test link
      ```ts
      const package = new Package({deep});
      const testTypeLinkId = await package["Test"].id();
      ```
      #### Use localId method to get the local id of the Test link
      ```ts
      const package = new Package({deep});
      const testTypeLinkId = await package["Test"].localId();
      ```
      #### Use name field to get the name of the Test link
      ```ts
      const package = new Package({deep});
      const test = await package["Test"].name;
      ```
      */
      public "Test" = this.createEntity("Test");
      /**
      @example
      #### Use id method to get the id of the TestInsertHandler link
      ```ts
      const package = new Package({deep});
      const testInsertHandlerTypeLinkId = await package["TestInsertHandler"].id();
      ```
      #### Use localId method to get the local id of the TestInsertHandler link
      ```ts
      const package = new Package({deep});
      const testInsertHandlerTypeLinkId = await package["TestInsertHandler"].localId();
      ```
      #### Use name field to get the name of the TestInsertHandler link
      ```ts
      const package = new Package({deep});
      const testInsertHandler = await package["TestInsertHandler"].name;
      ```
      */
      public "TestInsertHandler" = this.createEntity("TestInsertHandler");
      /**
      @example
      #### Use id method to get the id of the HandleTestInsert link
      ```ts
      const package = new Package({deep});
      const handleTestInsertTypeLinkId = await package["HandleTestInsert"].id();
      ```
      #### Use localId method to get the local id of the HandleTestInsert link
      ```ts
      const package = new Package({deep});
      const handleTestInsertTypeLinkId = await package["HandleTestInsert"].localId();
      ```
      #### Use name field to get the name of the HandleTestInsert link
      ```ts
      const package = new Package({deep});
      const handleTestInsert = await package["HandleTestInsert"].name;
      ```
      */
      public "HandleTestInsert" = this.createEntity("HandleTestInsert");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
