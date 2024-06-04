export interface Key {
    value: string;
    id: string;
  }
  
  export interface Keyboard {
    seed: string;
    keys: Key[];
  }


  interface Time {
    milliseconds: number;
  }
  
  interface Channel {
    code: string;
    name: string;
    description: string;
  }
  
  
  export interface IInfoChannelResponse {
    time: Time;
    channel: Channel;
    keyboard: Keyboard;
  }