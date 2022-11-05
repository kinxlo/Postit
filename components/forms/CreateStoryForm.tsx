import {
  Box,
  Heading,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Textarea,
  Button,
  Flex,
  InputRightAddon,
} from "@chakra-ui/react";

import React, {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import { FaEdit, FaImage, FaTags } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { database, storage } from "../../utils/firebase/firebaseService";
import { ref, uploadBytes } from "firebase/storage";

const colRef = collection(database, "Stories");

const CreateStoryForm = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [coverImageName, setCoverImageName] = useState("");
  const [file, setFile] = useState<File>();
  const [story, setStory] = useState("");
  const fileInput = useRef() as MutableRefObject<HTMLInputElement>;

  const handleCoverImage = (e: ChangeEvent<HTMLInputElement>) => {
    setCoverImageName(e.target.files![0].name);
    setFile(e.target.files![0]);
  };

  const uploadFile = () => {
    if (file) {
      const imageRef = ref(storage, `stories/${coverImageName}`);
      uploadBytes(imageRef, file as Blob).then(() => {
        uploadStories({
          title,
          tag,
          coverImageName,
          story,
        });
      });
    }
  };

  const uploadStories = (data: object) => {
    addDoc(colRef, data).then(() => {
      console.log(`Story published!`);
    });
  };

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    uploadFile();
  };

  return (
    <Box>
      <Heading mb={3.5}>Create Story</Heading>
      <FormControl onSubmit={handleSubmit} as={`form`} textAlign={`center`}>
        <InputGroup mb={5} size={`lg`}>
          <InputLeftElement>
            <Icon as={FaEdit} />
          </InputLeftElement>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            fontSize={`sm`}
            placeholder="Title"
          />
        </InputGroup>

        <InputGroup mb={5} size={`lg`}>
          <InputLeftElement>
            <Icon as={FaTags} />
          </InputLeftElement>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTag(e.target.value)
            }
            fontSize={`sm`}
            placeholder="Tags"
          />
        </InputGroup>

        <InputGroup mb={5} size={`lg`}>
          <InputLeftElement>
            <Icon as={FaImage} />
          </InputLeftElement>
          <input
            onChange={handleCoverImage}
            hidden
            ref={fileInput}
            type={`file`}
          />
          <Input
            value={coverImageName}
            fontSize={`sm`}
            placeholder="Cover image"
            readOnly
          />
          <InputRightAddon
            onClick={() => fileInput.current.click()}
            bg={`accent`}
            color={`white`}
            cursor={`pointer`}
          >
            Choose File
          </InputRightAddon>
        </InputGroup>

        <InputGroup size={`lg`}>
          <Textarea
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setStory(e.target.value)
            }
            h={`20rem`}
            p={5}
            fontSize={`sm`}
            placeholder="Write your story..."
          />
        </InputGroup>

        <Flex justifyContent={`center`} gap={5}>
          {/* <Button my={5} px={20} size={`lg`} bg={`accent`} color={`white`}>
            Continue
          </Button> */}
          <Button
            type="submit"
            my={5}
            px={20}
            size={`lg`}
            bg={`accent`}
            color={`white`}
          >
            Publish Story
          </Button>
          <Button variant={`ghost`} my={5} px={20} size={`lg`} color={`red`}>
            Save as Drafts
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default CreateStoryForm;
