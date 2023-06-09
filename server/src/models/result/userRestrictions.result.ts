interface IUserRestrictionResult {
  type: string;
  message: string;
}

export interface IUserRestrictionsResult {
  [userId: string]: IUserRestrictionResult[];
}
