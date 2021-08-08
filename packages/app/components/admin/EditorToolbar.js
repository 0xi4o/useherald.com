import { Button, HStack } from '@chakra-ui/react';
import {
	FaBold,
	FaCode,
	FaFileCode,
	FaItalic,
	FaListOl,
	FaListUl,
	FaQuoteRight,
} from 'react-icons/fa';

function EditorToolbar({ editor }) {
	return (
		<HStack w='full' spacing={2} mb={4}>
			<Button onClick={() => editor.chain().focus().toggleBold().run()}>
				<FaBold />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleItalic().run()}>
				<FaItalic />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
			>
				<FaListOl />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
			>
				<FaListUl />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
			>
				<FaQuoteRight />
			</Button>
			<Button onClick={() => editor.chain().focus().toggleCode().run()}>
				<FaCode />
			</Button>
			<Button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
			>
				<FaFileCode />
			</Button>
		</HStack>
	);
}

export default EditorToolbar;
