import { UserModelResponse } from 'domain/entities/user.model';

describe('UserModelResponse', () => {
  let user: UserModelResponse;

  beforeEach(() => {
    user = {
      id: 1,
      name: 'John',
      surname: 'Doe',
      level: 'Intermediate',
      profileImage: 'image.jpg',
      userRestrictions: [
        {
          type: 'restrictionType',
          message: 'restrictionMessage'
        }
      ],
      levelDetail: {
        levelId: 'levelId',
        description: 'description'
      }
    };
  });

  it('should have the correct id', () => {
    expect(user.id).toBe(1);
  });

  it('should have the correct name', () => {
    expect(user.name).toBe('John');
  });

  it('should have the correct surname', () => {
    expect(user.surname).toBe('Doe');
  });

  it('should have the correct level', () => {
    expect(user.level).toBe('Intermediate');
  });

  it('should have the correct profile image', () => {
    expect(user.profileImage).toBe('image.jpg');
  });

  it('should have user restrictions', () => {
    expect(user.userRestrictions).toBeDefined();
    expect(user.userRestrictions).toHaveLength(1);
    expect(user.userRestrictions[0]).toEqual({
      type: 'restrictionType',
      message: 'restrictionMessage'
    });
  });

  it('should have a level detail', () => {
    expect(user.levelDetail).toBeDefined();
    expect(user.levelDetail.levelId).toBe('levelId');
    expect(user.levelDetail.description).toBe('description');
  });
});
