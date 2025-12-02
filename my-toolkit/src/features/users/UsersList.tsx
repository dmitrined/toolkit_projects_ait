// src/features/users/UsersList.tsx
import styles from "./UsersList.module.css";
import { useGetUsersQuery } from "./usersApi";

export const UsersList = () => {
  const { data: users, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) return <p className={styles.loading}>Загрузка...</p>;
  // Обрабатываем ошибку более надежно
  if (isError) return <p className={styles.error}>Ошибка: {'status' in error ? `статус ${error.status}` : 'неизвестная ошибка'}</p>;

  // Добавляем проверку на случай, если users еще не пришли
  return (
    <div className={styles.grid}>
      {users?.map((user) => (
        <div key={user.id} className={styles.card}>
          <h2 className={styles.name}>
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className={styles.field}>
            <span>Email:</span> {user.email}
          </p>

          <p className={styles.field}>
            <span>Username:</span> {user.username}
          </p>

          <p className={styles.field}>
            <span>Phone:</span> {user.phone}
          </p>

          <div className={styles.address}>
            <span>Address:</span>
            <p>
              {user.address.city}, {user.address.street} {user.address.number}
            </p>
            <p>ZIP: {user.address.zipcode}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
