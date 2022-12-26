import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import axios, { AxiosResponse } from "axios";
import Spinner from "../../atoms/Spinner";

type SearchbarProps = {
  onSuccess: Function;
};

function Searchbar({ onSuccess }: SearchbarProps) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: FormEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const response: AxiosResponse = await axios({
        url: "/api/users",
        method: "get",
        params: { email: value },
      });
      setLoading(false);
      if (response.status === 200) {
        onSuccess(response.data.user);
      } else {
        throw new Error("An error occurred");
      }
    } catch (error) {
      alert("An error occurred");
    }
  }

  return (
    <>
      <Spinner loading={loading} />
      <div className='w-screen mt-10 flex flex-col items-center justify-center'>
        <h1 className='text-2xl my-6 '>
          Isn&apos;t it amazing to talk to friends?
        </h1>

        <h1 className='text-xl mb-4'>Find a friend with their email</h1>
        <form className='w-96' onSubmit={handleSearch}>
          <Input
            type='email'
            placeholder='Enter email'
            value={value}
            fullWidth
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            required
          />
          <Button type='submit' variant='primary' fullWidth>
            Search
          </Button>
        </form>
      </div>
    </>
  );
}

export default Searchbar;
