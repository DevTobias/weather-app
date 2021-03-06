import { objectType } from 'nexus';

export const Error = objectType({
  name: 'Error',
  definition(t) {
    t.nonNull.string('message');
  },
});
