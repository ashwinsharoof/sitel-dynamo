import * as dynamoose from 'dynamoose';

export const UserSchema = new dynamoose.Schema(
  {
    Id: {
      type: Number,
      hashKey: true,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
      },
    dob: {
        type: String,
        required: true
      },
  },
  {
    timestamps: true,
  },
);