import { useState } from "react";
import Heading from "../../Global/Heading";

const initialUsers = [
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
  const [users, setUsers] = useState(initialUsers);

  const deleteUser = (index: number) => {
    const updatedUsers = users.filter((_, id) => id !== index);
    setUsers(updatedUsers);
  };

  return (
    <>
      <Heading title="Users" />
      <div className="mt-4">
        {users.length === 0 ? (
          <>
            <p className="text-xl font-semibold text-center text-subtext">
              No Users Yet! 🙄
            </p>
          </>
        ) : (
          <ul className="grid-card pb-8">
            {users.map((user, index) => (
              <li
                key={index}
                data-aos="zoom-in"
                data-aos-delay="500"
                className="bg-white p-4 rounded-xl shadow"
              >
                <div className="border-b py-2">
                  <div className="flex py-1">
                    <div className="flex-1 text-sm font-semibold">
                      Username:
                    </div>
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
                  <button
                    onClick={() => deleteUser(index)}
                    className="flex-center-center p-1 px-2 bg-red-500 text-white rounded-lg"
                  >
                    <span className="material-symbols-outlined text-xl">
                      delete
                    </span>
                    <span className="text-sm font-semibold">Delete</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default User;
