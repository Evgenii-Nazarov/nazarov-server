export const listRoles = ['admin'];

const roles = {
  admin: [
    // USER
    'user.auth',
    'user.get.all',
    'user.delete.any',
    'user.update.any',
    'user.search',
    'user.impersonate',
    'user.stats',
    ]
};

export default roles;