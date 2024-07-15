import Heading from "../../Global/Heading";

const users = [
  {
    username: "Scorpion",
    email: "test@gmail.com",
  },
  {
    username: "Annie",
    email: "test@gmail.com",
  },
  {
    username: "Johndoe",
    email: "test@gmail.com",
  },
  {
    username: "George",
    email: "test@gmail.com",
  },
  {
    username: "Williams",
    email: "test@gmail.com",
  },
];
const User = () => {
  return (
    <>
      <Heading title="Users" />
      <div className="mt-4">
        <ul className="grid-card pb-8">
          {users.map((user, index) => (
            <li key={index} className="bg-white p-4 rounded-xl shadow">
              <div className="border-b py-2">
                <div className="flex py-1">
                  <div className="flex-1 text-sm font-semibold">Username:</div>
                  <div className="flex-1 text-sm">{user.username}</div>
                </div>
                <div className="flex py-1">
                  <div className="flex-1 text-sm font-semibold">E-mail:</div>
                  <div className="flex-1 text-sm">{user.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <button className="flex-center-center bg-green-500 text-white p-1 px-2 rounded-lg">
                  <span className="material-symbols-outlined text-xl">
                    person
                  </span>
                  <span className="text-sm font-semibold">Make Admin</span>
                </button>
                <button className="flex-center-center p-1 px-2 bg-red-500 text-white rounded-lg">
                  <span className="material-symbols-outlined text-xl">
                    delete
                  </span>
                  <span className="text-sm font-semibold">Delete</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default User;
