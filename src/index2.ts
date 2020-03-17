// 字面量类型
type Direction2 = 'North' | 'East' | 'South' | 'West';
function move(distance: number, direction: Direction2) {
  console.log(distance,direction)
}
move(1, 'North')

// 类型字面量
type Foo = {
  baz: [
    number,
    'xiaomuzhu'
  ];
  toString(): string;
  readonly [Symbol.iterator]: 'github';
  0x1: 'foo';
  "bar": 12n;
};



interface Info {
  username: string
}
type Info2 = {
  username: string
}
interface UserAction {
  id?: number
  action: 'create' | 'delete'
  // info: Info // 都行
  info: Info2
}

const UserReducer = (userAction: UserAction) => {
  switch (userAction.action) {
    case 'delete':
      console.log(userAction.id);
      break;
    default:
      break;
  }
}

type UserAction2 = {
  id: number
  action: 'delete'
  info: Info
} |
{
  action: 'create'
  info: Info
}

const UserReducer2 = (userAction: UserAction2) => {
  // console.log(userAction.id); // 报错
  switch (userAction.action) {
    case 'delete':
      console.log(userAction.id);
      break;
    default:
      break;
  }
}
