// pages/updateBook/[id].js
import UpdateBookForm from '../../../components/UpdateBookForm';

interface UpdateBookPageProps {
  params: {
    id: string; 
  };
}

const UpdateBookPage = ({params}: UpdateBookPageProps) => {
  const { id } = params;
    console.log(id);

  return (
    <div className=" mx-auto ">
      {id ? <UpdateBookForm bookId={id} /> : <p>Loading...</p>}
    </div>
  );
};

export default UpdateBookPage;
