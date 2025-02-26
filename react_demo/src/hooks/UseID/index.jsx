export const UseID = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
