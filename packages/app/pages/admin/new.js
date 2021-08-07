import {useState} from "react";
// import { useRouter } from 'next/router';
import {Box, Button, Divider, HStack, Input, VStack} from '@chakra-ui/react';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FaBold, FaCode, FaFileCode, FaItalic, FaListOl, FaListUl, FaQuoteRight } from "react-icons/fa";
import DefaultLayout from '../../components/layouts/Default';

function EditorToolbar({ editor }) {
	return (
		<HStack w='full' spacing={2} mb={8}>
			<Button onClick={() => editor.chain().focus().toggleBold().run()}>
				<FaBold />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleItalic().run()}>
				<FaItalic />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
				<FaListOl />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
				<FaListUl />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
				<FaQuoteRight />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleCode().run()}>
				<FaCode />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
				<FaFileCode />
			</Button>
		</HStack>
	);
}

function New() {
	// const router = useRouter();
	const [title, setTitle] = useState('New Update');
	const editor = useEditor({
		content: '<p>Hello, World!</p>',
		editorProps: {
			attributes: {
				class: ''
			}
		},
		extensions: [ StarterKit ]
	});

	return (
		<DefaultLayout>
			<VStack py={16} w='full' spacing={8}>
				<Input borderRadius='lg' h={16} fontSize='3xl' defaultValue={title} onChange={e => setTitle(e.target.value)} />
				<Divider />
				<Box w='full' h='auto' minH='600px'>
					<EditorToolbar editor={editor} />
					<EditorContent editor={editor} />
				</Box>
				<HStack w='full' d='flex' alignItems='center' justifyContent='flex-end' spacing={4}>
					<Button>Save</Button>
					<Button colorScheme='brand'>Publish</Button>
				</HStack>
			</VStack>
		</DefaultLayout>
	);
}

export default New;
