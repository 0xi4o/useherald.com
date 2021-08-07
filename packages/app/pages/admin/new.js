import { useState } from 'react';
import NextLink from 'next/link';
import {
	chakra,
	Box,
	Button,
	Divider,
	HStack,
	Input,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
	FaBold,
	FaChevronLeft,
	FaCode,
	FaFileCode,
	FaItalic,
	FaListOl,
	FaListUl,
	FaQuoteRight,
} from 'react-icons/fa';
import { supabase } from '../../lib/supabaseClient';
import DefaultLayout from '../../components/layouts/Default';

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

function New() {
	// const router = useRouter();
	const [changelog, setChangelog] = useState(null);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const editor = useEditor({
		content,
		editorProps: {
			attributes: {
				class: '',
			},
		},
		extensions: [StarterKit],
		onUpdate() {
			const html = this.getHTML();
			setContent(html);
		},
	});

	async function saveChangelog() {
		if (changelog) {
			// update existing record with latest content
			const update = { title, content };
			const { data, error } = await supabase
				.from('changelogs')
				.update(update)
				.match({ id: changelog.id });

			if (data && data.length > 0) {
				setChangelog(data[0]);
			} else {
				// throw error
				console.log(error);
			}
		} else {
			// insert latest content as a new draft changelog
			const user = supabase.auth.user();
			const record = { title, content, status: 'draft', author: user.id };
			const { data, error } = await supabase
				.from('changelogs')
				.insert([record]);

			if (data && data.length > 0) {
				setChangelog(data[0]);
			} else {
				// throw error
				console.log(error);
			}
		}
	}

	async function publishChangelog() {
		if (changelog) {
			// update existing record with latest content
			const update = { title, content };
			const { data, error } = await supabase
				.from('changelogs')
				.update(update)
				.match({ id: changelog.id });

			if (data && data.length > 0) {
				setChangelog(data[0]);
			} else {
				// throw error
				console.log(error);
			}
		} else {
			// insert latest content as a new published changelog
			const user = supabase.auth.user();
			const record = {
				title,
				content,
				status: 'published',
				author: user.id,
			};
			const { data, error } = await supabase
				.from('changelogs')
				.insert([record]);

			if (data && data.length > 0) {
				setChangelog(data[0]);
			} else {
				// throw error
				console.log(error);
			}
		}
	}

	return (
		<DefaultLayout>
			<VStack
				py={16}
				w='full'
				d='flex'
				alignItems='start'
				justifyContent='start'
				spacing={8}
			>
				<chakra.a>
					<NextLink href='/admin'>
						<Button
							variant='outline'
							borderWidth={1}
							borderColor={useColorModeValue('gray.400', 'white')}
							color={useColorModeValue('gray.400', 'white')}
							w={12}
							h={12}
						>
							<FaChevronLeft />
						</Button>
					</NextLink>
				</chakra.a>
				<VStack w='full' spacing={8}>
					<Input
						borderRadius='lg'
						h={16}
						fontSize='2xl'
						defaultValue={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='New Update'
					/>
					<Divider />
					<Box w='full' h='auto' minH='600px'>
						<EditorToolbar editor={editor} />
						<EditorContent editor={editor} />
					</Box>
					<HStack
						w='full'
						d='flex'
						alignItems='center'
						justifyContent='flex-end'
						spacing={4}
					>
						<Button onClick={saveChangelog}>Save</Button>
						<Button colorScheme='brand' onClick={publishChangelog}>
							Publish
						</Button>
					</HStack>
				</VStack>
			</VStack>
		</DefaultLayout>
	);
}

export default New;
