import { IResolvers } from "apollo-server-express";

const resolver: IResolvers = {
  Query: {
    doggo(_:void, args:void): string {
      return "Hey, I'm a doggo"
    }
  }
}

export default resolver