import { extendType, objectType } from 'nexus';
import { resolveLocations } from '../resolvers/Location';

/**
 * Describes the API Endpoint for location data.
 */
export const Location = objectType({
  name: 'Location',
  definition(t) {
    t.nonNull.id('id');
    t.nonNull.string('name');
  },
});

/**
 * Describes the API Endpoint which returns the data of all the
 * persisted locations.
 */
export const LocationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('locations', {
      type: Location,
      resolve: async (_, __, ctx) => resolveLocations(ctx),
    });
  },
});