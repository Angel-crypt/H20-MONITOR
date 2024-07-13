export const idlFactory = ({ IDL }) => {
  const WaterMeter = IDL.Record({
    'status' : IDL.Text,
    'ubicacion' : IDL.Text,
    'tarifa' : IDL.Text,
    'numero_medidor' : IDL.Text,
  });
  const User = IDL.Record({
    'id' : IDL.Principal,
    'direccion' : IDL.Text,
    'numero_cuenta' : IDL.Nat,
  });
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
    'registerUser' : IDL.Func([IDL.Nat, IDL.Text], [User], []),
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
