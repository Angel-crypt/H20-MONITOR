export const idlFactory = ({ IDL }) => {
  const WaterMeter = IDL.Record({
    'id' : IDL.Text,
    'status' : IDL.Text,
    'usage' : IDL.Nat,
    'location' : IDL.Text,
  });
  const Admin = IDL.Principal;
  const User = IDL.Record({ 'id' : IDL.Principal, 'name' : IDL.Text });
  return IDL.Service({
    'addWaterMeter' : IDL.Func([WaterMeter], [WaterMeter], []),
    'deleteWaterMeter' : IDL.Func([IDL.Text], [IDL.Text], []),
    'registerAdmin' : IDL.Func([], [Admin], []),
    'registerUser' : IDL.Func([IDL.Text], [User], []),
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
