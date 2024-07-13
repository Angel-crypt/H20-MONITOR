export const idlFactory = ({ IDL }) => {
  const WaterMeter = IDL.Record({
    'id' : IDL.Text,
    'status' : IDL.Text,
    'usage' : IDL.Nat,
    'location' : IDL.Text,
  });
  const User = IDL.Record({ 'id' : IDL.Principal, 'name' : IDL.Text });
  const Admin = IDL.Principal;
  return IDL.Service({
    'addWaterMeter' : IDL.Func([WaterMeter], [WaterMeter], []),
    'deleteUser' : IDL.Func([], [IDL.Text], []),
    'deleteWaterMeter' : IDL.Func([IDL.Text], [IDL.Text], []),
    'listAdmins' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'listUsers' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, User))],
        ['query'],
      ),
    'registerAdmin' : IDL.Func([], [Admin], []),
    'registerUser' : IDL.Func([IDL.Text], [User], []),
    'updateUser' : IDL.Func([IDL.Text], [IDL.Text], []),
    'updateWaterMeter' : IDL.Func([IDL.Text, WaterMeter], [IDL.Text], []),
    'viewAllWaterMeters' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, WaterMeter))],
        ['query'],
      ),
    'viewWaterMeter' : IDL.Func([IDL.Text], [IDL.Opt(WaterMeter)], ['query']),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
