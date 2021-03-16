create table exercises
(
    id       smallint unsigned auto_increment primary key,
    name     varchar(60) not null,
    category varchar(60) not null
);

 create table records
 (
     id         smallint unsigned auto_increment primary key,
     name       varchar(60)       not null,
     date       varchar(60)       not null,
     result     varchar(60)       not null,
     exerciseId smallint unsigned not null,
     username   varchar(255)      null,
     constraint records_users_username_fk
         foreign key (username) references users (username)
 );

create table users
(
    id        int auto_increment primary key,
    username  varchar(255) null,
    email     varchar(255) null,
    password  varchar(255) null,
    createdAt datetime     not null,
    updatedAt datetime     not null,
    constraint users_username_uindex
        unique (username)
);

create table user_roles
(
    createdAt datetime not null,
    updatedAt datetime not null,
    roleId    int      not null,
    userId    int      not null,
    primary key (roleId, userId),
    constraint user_roles_ibfk_1
        foreign key (roleId) references roles (id)
            on update cascade on delete cascade,
    constraint user_roles_ibfk_2
        foreign key (userId) references users (id)
            on update cascade on delete cascade
);

create index userId
    on user_roles (userId);

create table roles
(
    id        int          not null
        primary key,
    name      varchar(255) null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);
