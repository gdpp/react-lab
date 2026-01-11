import Link from "next/link";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      comments: 128,
      rating: 4.8,
      description:
        "A skilled thief enters people's dreams to steal secrets, but his toughest mission is planting an idea instead.",
    },
    {
      id: 2,
      title: "The Matrix",
      comments: 256,
      rating: 4.9,
      description:
        "A hacker discovers reality is a simulation and joins a rebellion against its controllers.",
    },
    {
      id: 3,
      title: "Interstellar",
      comments: 192,
      rating: 4.7,
      description:
        "Explorers travel through a wormhole in space to ensure humanity’s survival.",
    },
    {
      id: 4,
      title: "The Dark Knight",
      comments: 310,
      rating: 4.9,
      description:
        "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos.",
    },
    {
      id: 5,
      title: "Parasite",
      comments: 175,
      rating: 4.6,
      description:
        "A poor family schemes to become employed by a wealthy household with shocking consequences.",
    },
  ];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);

  return (
    <div
      className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100
        flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to the Dashboard App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-blue-600
           text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700
            transition-colors shadow-lg hover:shadow-xl"
        >
          Go to Dashboard
        </Link>
      </div>
      <div className="bg-linear-to-r from-blue-500 to-indigo-600 my-2 p-4 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">Movies</h2>
        <div className="grid gtid-cols-1 sm:grid-cols-3 gap-6 text-white">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Movies</p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Total Comments</p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <p className="text-lg font-medium">Average Ratings</p>
            <p className="text-4xl font-bold">{averageRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
