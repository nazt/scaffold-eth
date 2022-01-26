/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace MyOracle {
  export type LocationStruct = { lat: string; lon: string; name: string };

  export type LocationStructOutput = [string, string, string] & {
    lat: string;
    lon: string;
    name: string;
  };
}

export interface MyOracleInterface extends utils.Interface {
  contractName: "MyOracle";
  functions: {
    "addLocation(string,string,string)": FunctionFragment;
    "addWhitelist(address)": FunctionFragment;
    "addresses(uint256)": FunctionFragment;
    "arr(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "dummy()": FunctionFragment;
    "get(uint256)": FunctionFragment;
    "getAddressList()": FunctionFragment;
    "getAllLocations()": FunctionFragment;
    "getArr()": FunctionFragment;
    "getLength()": FunctionFragment;
    "getValueAt(address)": FunctionFragment;
    "locations(uint256)": FunctionFragment;
    "metaData()": FunctionFragment;
    "owner()": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "removeWhitelist(address)": FunctionFragment;
    "sensors(string)": FunctionFragment;
    "sensorsValue(string)": FunctionFragment;
    "setMeta(uint256,string,string,string)": FunctionFragment;
    "updateValue(address,uint256)": FunctionFragment;
    "valueOf(address)": FunctionFragment;
    "values(address)": FunctionFragment;
    "whitelistAddress(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLocation",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "arr", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "dummy", values?: undefined): string;
  encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getAddressList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllLocations",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getArr", values?: undefined): string;
  encodeFunctionData(functionFragment: "getLength", values?: undefined): string;
  encodeFunctionData(functionFragment: "getValueAt", values: [string]): string;
  encodeFunctionData(
    functionFragment: "locations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "metaData", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhitelist",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "sensors", values: [string]): string;
  encodeFunctionData(
    functionFragment: "sensorsValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMeta",
    values: [BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateValue",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "valueOf", values: [string]): string;
  encodeFunctionData(functionFragment: "values", values: [string]): string;
  encodeFunctionData(
    functionFragment: "whitelistAddress",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addresses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "arr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dummy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAddressList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllLocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getArr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValueAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "locations", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "metaData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sensors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sensorsValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMeta", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "valueOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistAddress",
    data: BytesLike
  ): Result;

  events: {
    "AddLocation(string,string,string)": EventFragment;
    "AddWhitelist(address)": EventFragment;
    "OracleUpdate(address,uint256,uint256)": EventFragment;
    "RemoveWhitelist(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLocation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddWhitelist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveWhitelist"): EventFragment;
}

export type AddLocationEvent = TypedEvent<
  [string, string, string],
  { lat: string; lon: string; name: string }
>;

export type AddLocationEventFilter = TypedEventFilter<AddLocationEvent>;

export type AddWhitelistEvent = TypedEvent<[string], { addr: string }>;

export type AddWhitelistEventFilter = TypedEventFilter<AddWhitelistEvent>;

export type OracleUpdateEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; idx: BigNumber; value: BigNumber }
>;

export type OracleUpdateEventFilter = TypedEventFilter<OracleUpdateEvent>;

export type RemoveWhitelistEvent = TypedEvent<[string], { addr: string }>;

export type RemoveWhitelistEventFilter = TypedEventFilter<RemoveWhitelistEvent>;

export interface MyOracle extends BaseContract {
  contractName: "MyOracle";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MyOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLocation(
      lat: string,
      lon: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addWhitelist(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    dummy(overrides?: CallOverrides): Promise<[string]>;

    get(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    getAddressList(overrides?: CallOverrides): Promise<[string[]]>;

    getAllLocations(
      overrides?: CallOverrides
    ): Promise<[MyOracle.LocationStructOutput[]]>;

    getArr(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getValueAt(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    locations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & { lat: string; lon: string; name: string }
    >;

    metaData(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    remove(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeWhitelist(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sensors(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & { lat: string; lon: string; name: string }
    >;

    sensorsValue(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    setMeta(
      idx: BigNumberish,
      lat: string,
      lon: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateValue(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    valueOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    values(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    whitelistAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addLocation(
    lat: string,
    lon: string,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addWhitelist(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  dummy(overrides?: CallOverrides): Promise<string>;

  get(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getAddressList(overrides?: CallOverrides): Promise<string[]>;

  getAllLocations(
    overrides?: CallOverrides
  ): Promise<MyOracle.LocationStructOutput[]>;

  getArr(overrides?: CallOverrides): Promise<BigNumber[]>;

  getLength(overrides?: CallOverrides): Promise<BigNumber>;

  getValueAt(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  locations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & { lat: string; lon: string; name: string }
  >;

  metaData(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  remove(
    index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeWhitelist(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sensors(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & { lat: string; lon: string; name: string }
  >;

  sensorsValue(arg0: string, overrides?: CallOverrides): Promise<number>;

  setMeta(
    idx: BigNumberish,
    lat: string,
    lon: string,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateValue(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  valueOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  values(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  whitelistAddress(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    addLocation(
      lat: string,
      lon: string,
      name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addWhitelist(_addr: string, overrides?: CallOverrides): Promise<void>;

    addresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    dummy(overrides?: CallOverrides): Promise<string>;

    get(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getAddressList(overrides?: CallOverrides): Promise<string[]>;

    getAllLocations(
      overrides?: CallOverrides
    ): Promise<MyOracle.LocationStructOutput[]>;

    getArr(overrides?: CallOverrides): Promise<BigNumber[]>;

    getLength(overrides?: CallOverrides): Promise<BigNumber>;

    getValueAt(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    locations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & { lat: string; lon: string; name: string }
    >;

    metaData(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    remove(index: BigNumberish, overrides?: CallOverrides): Promise<void>;

    removeWhitelist(_addr: string, overrides?: CallOverrides): Promise<void>;

    sensors(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & { lat: string; lon: string; name: string }
    >;

    sensorsValue(arg0: string, overrides?: CallOverrides): Promise<number>;

    setMeta(
      idx: BigNumberish,
      lat: string,
      lon: string,
      name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateValue(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    valueOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    whitelistAddress(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "AddLocation(string,string,string)"(
      lat?: null,
      lon?: null,
      name?: null
    ): AddLocationEventFilter;
    AddLocation(lat?: null, lon?: null, name?: null): AddLocationEventFilter;

    "AddWhitelist(address)"(addr?: string | null): AddWhitelistEventFilter;
    AddWhitelist(addr?: string | null): AddWhitelistEventFilter;

    "OracleUpdate(address,uint256,uint256)"(
      sender?: string | null,
      idx?: null,
      value?: null
    ): OracleUpdateEventFilter;
    OracleUpdate(
      sender?: string | null,
      idx?: null,
      value?: null
    ): OracleUpdateEventFilter;

    "RemoveWhitelist(address)"(
      addr?: string | null
    ): RemoveWhitelistEventFilter;
    RemoveWhitelist(addr?: string | null): RemoveWhitelistEventFilter;
  };

  estimateGas: {
    addLocation(
      lat: string,
      lon: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addWhitelist(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    arr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    dummy(overrides?: CallOverrides): Promise<BigNumber>;

    get(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getAddressList(overrides?: CallOverrides): Promise<BigNumber>;

    getAllLocations(overrides?: CallOverrides): Promise<BigNumber>;

    getArr(overrides?: CallOverrides): Promise<BigNumber>;

    getLength(overrides?: CallOverrides): Promise<BigNumber>;

    getValueAt(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    locations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    metaData(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeWhitelist(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sensors(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    sensorsValue(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setMeta(
      idx: BigNumberish,
      lat: string,
      lon: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateValue(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    valueOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    values(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    whitelistAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLocation(
      lat: string,
      lon: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addWhitelist(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    arr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dummy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddressList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllLocations(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getArr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getValueAt(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    locations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metaData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeWhitelist(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sensors(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sensorsValue(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMeta(
      idx: BigNumberish,
      lat: string,
      lon: string,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateValue(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    valueOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    values(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}