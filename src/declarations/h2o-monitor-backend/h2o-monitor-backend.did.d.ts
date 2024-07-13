import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Admin = Principal;
export interface User {
  'id' : Principal,
  'direccion' : string,
  'numero_cuenta' : bigint,
}
export interface WaterMeter {
  'status' : string,
  'ubicacion' : string,
  'tarifa' : string,
  'numero_medidor' : string,
}
export interface _SERVICE {
  'addWaterMeter' : ActorMethod<[WaterMeter], WaterMeter>,
  'deleteUser' : ActorMethod<[], string>,
  'deleteWaterMeter' : ActorMethod<[string], string>,
  'listAdmins' : ActorMethod<[], Array<Principal>>,
  'listUsers' : ActorMethod<[], Array<[Principal, User]>>,
  'registerAdmin' : ActorMethod<[], Admin>,
  'registerUser' : ActorMethod<[bigint, string], User>,
  'updateWaterMeter' : ActorMethod<[string, WaterMeter], string>,
  'viewAllWaterMeters' : ActorMethod<[], Array<[string, WaterMeter]>>,
  'viewWaterMeter' : ActorMethod<[string], [] | [WaterMeter]>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
