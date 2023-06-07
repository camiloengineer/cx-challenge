export interface UserModelResponse {
    id: number;
    name: string;
    surname: string;
    level: string;
    profileImage: string;
    userRestrictions: {
      type: string;
      message: string;
    }[];
    levelDetail: {
      levelId: string;
      description: string;
    };
  }
  