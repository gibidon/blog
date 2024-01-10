области хранения данных:

- БД на json-server
- BFF
  -redux store на клиенте

Сущности приложения:

- пользователь: БД( список пользователей), BFF (сессия текущего пользователя), стор(отображения в браузере)
  -роль пользователя: БД(список ролей), BFF(сессия пользователя с ролью), стор(использование на клиенте)
  -статья: БД (список статей), стор(отображение в браузере)
  -комментарийЖ БД(список комментариев), стор(отображение в браузере)

  Таблицы БД:
  -пользователи -users:id/login/password/registed_at/role_id
  -роли - roles: id/name
  -статьи - posts: id/title/image_url/content/published_at
  -комментарии - comments: id/author_id/ post_id /content

Схема состояния на BFF:
-сессия текущего пользователя: логин, пароль, роль

Схема для редакс стора на клиенте:
-user : id/login/ role_id/session
-posts: массив post: id/ title/ image_url/ published_at/ comments_count
-post: id/ title/ image_url/content / published_at/ comments: массив comment: id,authir/ content/ published_at
-users: массив user: id,login/ registered_at/ role
