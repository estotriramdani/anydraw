interface IComment {
  id: string;
  author: string;
  body: string;
  comments: IComment[];
}

const comments: IComment[] = [
  {
    id: Math.random().toString(),
    author: 'Esto',
    body: 'Body',
    comments: [
      {
        id: Math.random().toString(),
        author: 'Esto 1',
        body: 'Body 1',
        comments: [
          {
            id: Math.random().toString(),
            author: 'Esto 1.1',
            body: 'Body 1.1',
            comments: [
              {
                id: Math.random().toString(),
                author: 'Esto 1.1.1',
                body: 'Body 1.1.1',
                comments: [],
              },
              {
                id: Math.random().toString(),
                author: 'Esto 1.1.2',
                body: 'Body 1.1.2',
                comments: [],
              },
              {
                id: Math.random().toString(),
                author: 'Esto 1.1.3',
                body: 'Body 1.1.3',
                comments: [],
              },
            ],
          },
        ],
      },
      {
        id: Math.random().toString(),
        author: 'Esto 2',
        body: 'Body 2',
        comments: [
          {
            id: Math.random().toString(),
            author: 'Esto 2.1',
            body: 'Body 2.1',
            comments: [],
          },
        ],
      },
    ],
  },
  {
    id: Math.random().toString(),
    author: 'Fulan',
    body: 'Body',
    comments: [
      {
        id: Math.random().toString(),
        author: 'Fulan 1',
        body: 'Body 1',
        comments: [
          {
            id: Math.random().toString(),
            author: 'Fulan 1.1',
            body: 'Body 1.1',
            comments: [
              {
                id: Math.random().toString(),
                author: 'Fulan 1.1.1',
                body: 'Body 1.1.1',
                comments: [],
              },
              {
                id: Math.random().toString(),
                author: 'Fulan 1.1.2',
                body: 'Body 1.1.2',
                comments: [],
              },
            ],
          },
        ],
      },
      {
        id: Math.random().toString(),
        author: 'Fulan 2',
        body: 'Body 2',
        comments: [
          {
            id: Math.random().toString(),
            author: 'Fulan 2.1',
            body: 'Body 2.1',
            comments: [],
          },
        ],
      },
    ],
  },
  {
    id: Math.random().toString(),
    author: 'John',
    body: 'Body',
    comments: [],
  },
];

const renderComment = (comment: IComment, level: number): any => {
  return comment?.comments?.map((comm, index) => {
    if (comm.comments.length !== 0) {
      return <CardNested comment={comm} level={level + index + 1} />;
    }
    return <CardNested comment={comm} level={level + 1} />;
  });
};

const CardNested = ({ comment, level }: { comment: IComment; level: number }) => {
  return (
    <div>
      <div className="mb-2 border p-3" style={{ marginLeft: `${level * 20}px` }}>
        <p>{comment.author}</p>
        <p>{comment.body}</p>
        <p>Level: {level}</p>
      </div>
      {renderComment(comment, level)}
    </div>
  );
};

export default function NestedComments() {
  return (
    <div className="p-3">
      {comments.map((comment, index) => {
        return <CardNested key={comment.id} comment={comment} level={0} />;
      })}
    </div>
  );
}
