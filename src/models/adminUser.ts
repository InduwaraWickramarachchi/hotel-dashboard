import mongoose from 'mongoose';

const { model, models, Schema } = mongoose;

const AdminUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
});

export const AdminUser = models.AdminUser || model('AdminUser', AdminUserSchema);
