import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Admin = Principal;
export interface User { 'id' : Principal, 'name' : string }
export interface WaterMeter {
  'id' : string,
  'status' : string,
  'usage' : bigint,
  'location' : string,
}
export interface _SERVICE {
  'addWaterMeter' : ActorMethod<[WaterMeter], WaterMeter>,
  'deleteWaterMeter' : ActorMethod<[string], string>,
  'registerAdmin' : ActorMethod<[], Admin>,
  'registerUser' : ActorMethod<[string], User>,
  'updateWaterMeter' : ActorMethod<[string, WaterMeter], string>,
  'viewAllWaterMeters' : ActorMethod<[], Array<[string, WaterMeter]>>,
  'viewWaterMeter' : ActorMethod<[string], [] | [WaterMeter]>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
