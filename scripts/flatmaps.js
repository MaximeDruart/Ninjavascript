'use strict';

const maps = [
    [ // LEVEL 1
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[100,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[10,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0]],
    ],
    [ // LEVEL 2
      [[0,0.5,0],[0,0.5,0],[100,0.5,0]],
      [[0,0.5,0],[1,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[1,0.5,0],[0,0.5,0]],
      [[10,0.5,0],[1,0.5,0],[0,0.5,0]]
    ],
    [ // LEVEL 3
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[100,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[3,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[10,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    ],
    [ // LEVEL 4
      [[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[3,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[10,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0]]
    ],
    [ // LEVEL 5
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[100,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[4,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[2,0.5,0],[1,0.5,0],[3,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,0.5,0],[1,0.5,0],[1,0.5,0]]
    ],
    [ // LEVEL 6
      [[1,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0],[2,0.5,0]],
      [[3,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[10,0.5,0],[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0]]
    ],
    [ // LEVEL 7
      [[1000,0.5,0],[30,0.5,0],[1,0.5,0],[6,0.5,0],[0,0.5,0],[0,0.5,0],[5,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[4,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[10,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0]]
    ],
    [ // LEVEL 8
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[3,0.5,0],[1,0.5,0],[1,0.5,0],[4,0.5,0],[1,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[6,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[2,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
      [[0,0.5,0],[0,0.5,0],[5,0.5,0],[10,0.5,0],[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0]]
    ],
    [ // LEVEL 9
     [[1,0.5,0],[4,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0],[50,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[6,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0],[1,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
     [[5,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[1,0.5,0],[0,0.5,0],[1,0.5,0],[30,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[3,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[8,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[60,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,0.5,0],[1,0.5,0],[2,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[7,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]]
   ],

    [ // LEVEL 10
   [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10000,4,3.5],[1,4,3.5],[3,4,3.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3.5,3],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[60,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[3,3,2.5],[1,3,2.5],[0,0.5,0],[1,3,2.5],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[4,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[1,2.5,2],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[5,1.5,1],[8,1.5,1],[0,0.5,0],[0,0.5,0],[7,0.5,0]],
   [[0,0.5,0],[1,2,1.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[6,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,1.5,1],[1,1.5,1],[1,1,0.5],[1,0.5,0]],
   [[0,0.5,0],[1,1.5,1],[1,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,1.5,1],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[0,0.5,0],[2,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
   [[0,0.5,0],[0,0.5,0],[1,1,0.5],[1,0.5,0],[50,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,1.5,1],[0,0.5,0],[0,0.5,0],[0,0.5,0]]
 ],
  //  [ // LEVEL 10
  //    [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10000,0.5,0],[1,0.5,0],[3,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
  //    [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
  //    [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[60,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
  //    [[0,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
  //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
  //    [[0,0.5,0],[4,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[6,0.5,0],[0,0.5,0],[0,0.5,0],[5,0.5,0],[8,0.5,0],[0,0.5,0],[0,0.5,0],[7,0.5,0]],
  //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0]],
  //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
  //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
  //    [[0,0.5,0],[2,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0],[50,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]]
  //  ],
   [// LEVEL11
    [[13,0.5,0],[1,0.5,0],[1,0.5,0]],
    [[12,0.5,0],[10,0.5,0],[1,0.5,0]],
    [[11,0.5,0],[1,0.5,0],[1,0.5,0]]
   ]
  ]

const maps2 = [
      [ // LEVEL 1
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[100,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[10,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0]],
      ],
      [ // LEVEL 2
        [[0,0.5,0],[0,0.5,0],[100,0.5,0]],
        [[0,0.5,0],[1,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[1,0.5,0],[0,0.5,0]],
        [[10,0.5,0],[1,0.5,0],[0,0.5,0]]
      ],
      [ // LEVEL 3
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[100,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[3,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[10,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
      ],
      [ // LEVEL 4
        [[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[3,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[10,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0]]
      ],
      [ // LEVEL 5
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[100,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[4,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[2,0.5,0],[1,0.5,0],[3,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,0.5,0],[1,0.5,0],[1,0.5,0]]
      ],
      [ // LEVEL 6
        [[1,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0],[2,0.5,0]],
        [[3,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[10,0.5,0],[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0]]
      ],
      [ // LEVEL 7
        [[1000,0.5,0],[30,0.5,0],[1,0.5,0],[6,0.5,0],[0,0.5,0],[0,0.5,0],[5,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[4,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[10,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0]]
      ],
      [ // LEVEL 8
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[3,0.5,0],[1,0.5,0],[1,0.5,0],[4,0.5,0],[1,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[6,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[2,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
        [[0,0.5,0],[0,0.5,0],[5,0.5,0],[10,0.5,0],[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0]]
      ],
      [ // LEVEL 9
       [[4,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0],[50,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
       [[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
       [[6,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
       [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1000,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0],[1,0.5,0]],
       [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
       [[5,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
       [[1,0.5,0],[0,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[3,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[3,0.5,0]],
       [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[8,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0]],
       [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[60,0.5,0]],
       [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,0.5,0],[1,0.5,0],[2,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
       [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
       [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[7,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]]
     ],

      [ // LEVEL 10
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10000,4,3.5],[1,4,3.5],[3,4,3.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3.5,3],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[60,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[3,3,2.5],[1,3,2.5],[0,0.5,0],[1,3,2.5],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[4,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[1,2.5,2],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,3,2.5],[0,0.5,0],[0,0.5,0],[5,1.5,1],[8,1.5,1],[0,0.5,0],[0,0.5,0],[7,0.5,0]],
     [[0,0.5,0],[1,2,1.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[6,3,2.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[3,1.5,1],[1,1.5,1],[1,1,0.5],[1,0.5,0]],
     [[0,0.5,0],[1,1.5,1],[1,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,1.5,1],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[2,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
     [[0,0.5,0],[0,0.5,0],[1,1,0.5],[0,0.5,0],[50,1,0.5],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,1.5,1],[0,0.5,0],[0,0.5,0],[0,0.5,0]]
   ],
    //  [ // LEVEL 10
    //    [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10000,0.5,0],[1,0.5,0],[3,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    //    [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    //    [[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[60,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    //    [[0,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[1,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    //    [[0,0.5,0],[4,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[6,0.5,0],[0,0.5,0],[0,0.5,0],[5,0.5,0],[8,0.5,0],[0,0.5,0],[0,0.5,0],[7,0.5,0]],
    //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[1,0.5,0],[2,0.5,0],[1,0.5,0]],
    //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    //    [[0,0.5,0],[1,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]],
    //    [[0,0.5,0],[2,0.5,0],[1,0.5,0],[1,0.5,0],[1,0.5,0],[50,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0],[10,0.5,0],[0,0.5,0],[0,0.5,0],[0,0.5,0]]
    //  ],
     [// LEVEL11
      [[13,0.5,0],[1,0.5,0],[1,0.5,0]],
      [[12,0.5,0],[10,0.5,0],[1,0.5,0]],
      [[11,0.5,0],[1,0.5,0],[1,0.5,0]]
     ]
    ]  

function transpose(a) { // https://stackoverflow.com/questions/4492678/swap-rows-with-columns-transposition-of-a-matrix-in-javascript

    // Calculate the width and height of the Array
    var w = a.length || 0;
    var h = a[0] instanceof Array ? a[0].length : 0;

    // In case it is a zero matrix, no transpose routine needed.
    if(h === 0 || w === 0) { return []; }

    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];

    // Loop through every item in the outer array (height)
    for(i=0; i<h; i++) {

      // Insert a new row (array)
      t[i] = [];

      // Loop through every item per item in outer array (width)
      for(j=0; j<w; j++) {

        // Save transposed data.
        t[i][j] = a[j][i];
      }
    }

    return t;
  }

// on inverse les lignes et colonnes
for (var i = 0; i < maps.length; i++) {
  maps[i] = transpose(maps[i])
  maps2[i] = transpose(maps2[i])
}
