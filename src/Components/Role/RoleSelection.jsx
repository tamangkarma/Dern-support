export const RoleSelection = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="role" className="block mb-1 font-medium text-gray-700">
        Role
      </label>
      <select
        id="role"
        {...register("role", { required: "Role is required" })}
        className="w-full border rounded-md py-2 px-3"
      >
        <option value="">Select Role</option>
        <option value="CUSTOMER">Customer</option>
        <option value="ADMIN">Admin</option>
      </select>
      {errors.role && (
        <span className="text-red-500 text-sm">{errors.role.message}</span>
      )}
    </div>
  );
};
