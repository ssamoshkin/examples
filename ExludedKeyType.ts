/*
    дополнить описание объекта так, чтобы он запрещал свойство с именем 'foo' в объекте.
    А остальные по прежнему не запрещал
 */

type NotFooObject = { [key: string]: any };

const notFooObject: NotFooObject = {
    property_1: true,
    property_2: 1,
    text: 'ok',
    foo: ' <=== this should not be ok',
}

type MyNotFooObject = {
    [key: string]: any,
    foo?: never
};

const myNotFooObject: MyNotFooObject = {
    property_1: true,
    property_2: 1,
    text: 'ok',
    // @ts-ignore // remove this for get ts error
    foo: ' <=== this should not be ok',
}