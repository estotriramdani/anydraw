import { useEffect, useState } from 'react';

interface IComment {
  id: string;
  name: string;
  body: string;
  comments: IComment[];
}

const comments: IComment[] = [
  {
    id: Math.random().toString(),
    name: 'Esto',
    body: 'Body',
    comments: [
      {
        id: Math.random().toString(),
        name: 'Esto 1',
        body: 'Body 1',
        comments: [
          {
            id: Math.random().toString(),
            name: 'Esto 1.1',
            body: 'Body 1.1',
            comments: [
              {
                id: Math.random().toString(),
                name: 'Esto 1.1.1',
                body: 'Body 1.1.1',
                comments: [],
              },
              {
                id: Math.random().toString(),
                name: 'Esto 1.1.2',
                body: 'Body 1.1.2',
                comments: [],
              },
              {
                id: Math.random().toString(),
                name: 'Esto 1.1.3',
                body: 'Body 1.1.3',
                comments: [],
              },
            ],
          },
        ],
      },
      {
        id: Math.random().toString(),
        name: 'Esto 2',
        body: 'Body 2',
        comments: [
          {
            id: Math.random().toString(),
            name: 'Esto 2.1',
            body: 'Body 2.1',
            comments: [],
          },
        ],
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: 'Fulan',
    body: 'Body',
    comments: [
      {
        id: Math.random().toString(),
        name: 'Fulan 1',
        body: 'Body 1',
        comments: [
          {
            id: Math.random().toString(),
            name: 'Fulan 1.1',
            body: 'Body 1.1',
            comments: [
              {
                id: Math.random().toString(),
                name: 'Fulan 1.1.1',
                body: 'Body 1.1.1',
                comments: [],
              },
              {
                id: Math.random().toString(),
                name: 'Fulan 1.1.2',
                body: 'Body 1.1.2',
                comments: [],
              },
            ],
          },
        ],
      },
      {
        id: Math.random().toString(),
        name: 'Fulan 2',
        body: 'Body 2',
        comments: [
          {
            id: Math.random().toString(),
            name: 'Fulan 2.1',
            body: 'Body 2.1',
            comments: [],
          },
        ],
      },
    ],
  },
  {
    id: Math.random().toString(),
    name: 'John',
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
        <p>{comment.name}</p>
        <p>{comment.body}</p>
        <hr className="mt-2 pb-1" />
        <p>id: {comment.id}</p>
        <p>Level: {level}</p>
      </div>
      {renderComment(comment, level)}
    </div>
  );
};

export default function NestedComments() {
  const [comments, setComments] = useState<IComment[]>();

  const fetchAPI = async () => {
    const response = await fetch('https://6386c834d9b24b1be3de37f1.mockapi.io/comments');
    const responseJson = await response.json();
    setComments(responseJson);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (!comments) {
    return (
      <div className="w-full p-2">
        <div className="mb-2 h-[150px] w-full animate-pulse rounded-lg bg-slate-300"></div>
        <div className="mb-2 ml-[20px] h-[150px] w-full animate-pulse rounded-lg bg-slate-300"></div>
        <div className="mb-2 h-[150px] w-full animate-pulse rounded-lg bg-slate-300"></div>
      </div>
    );
  }

  return (
    <div className="p-3">
      {comments?.map((comment) => {
        return <CardNested key={comment.id} comment={comment} level={0} />;
      })}
    </div>
  );
}
