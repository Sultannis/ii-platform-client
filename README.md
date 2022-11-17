# ii-platform-client

Client side application for "Inovative ideas plaform" project.

### SFC styleguide

##### Component blocks order

1. template
2. script (setup option is required.
3. style (lang="scss" atribute included. Scoped atribute included. Ampersand usage is forbidden.

---

##### Script block order

1. Imports
   1. Framework methods imports
   2. Packages imports
   3. Constants imports
   4. Composables
   5. Components imports
2. 'defineProps' and 'defineEmits' methods respectively
3. Lifecycle hooks
   1. beforeCreated
   2. created
   3. beforeMount
   4. mounted
   5. beforeUpdate
   6. updated
   7. beforeUnmount
   8. unmounted
4. Variables
5. Types, Enums
6. Computed properties
7. Watchers
8. Methods

---
