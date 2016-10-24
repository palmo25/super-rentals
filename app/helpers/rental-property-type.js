import Ember from 'ember';

const communityPropertyTyoes = [
  'Condo',
  'Townhouse',
  'Apartment'
];
export function rentalPropertyType([type]/*, hash*/) {
  if (communityPropertyTyoes.includes(type)){
    return 'Community';
  }
  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
