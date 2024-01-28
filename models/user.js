import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
      default: "guest",
      enums: ["guest","free_account"],
    },
    lastLogin: {
      type: Date,
    },
    permissions: {
      type: [String],
      required: true,
      default:"can_not_edit",
      enums: ["can_view_free_report","can_edit_profile","can_not_edit"],
    },
    assessmentResults: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
