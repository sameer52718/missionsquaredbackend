import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "super_admin",
      enums: ["super_admin"],
    },
    lastLogin: {
      type: Date,
    },
    permissions: {
      type: [String],
      required: true,
      enums: [
        "can_view_all_entities",
        "can_edit_all_profiles",
        "can_access_system_settings",
        "can_modify_user_roles",
        "can_view_sensitive_data",
      ],
    },
    assessmentResults: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


export const Admin =  mongoose.model("Admin" ,adminSchema)