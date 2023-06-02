interface IUserRestrictionDto {
  type: string;
  message: string;
}

export interface IUserRestrictionsDto {
  [userId: string]: IUserRestrictionDto[];
}
