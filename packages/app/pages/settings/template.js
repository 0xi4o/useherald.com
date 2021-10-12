import { useState } from 'react';
import {
	chakra,
	Box,
	VStack,
	useToast,
	Button,
	HStack,
} from '@chakra-ui/react';
import SettingsLayout from '../../components/layouts/Settings';
import EditorToolbar from '../../components/admin/EditorToolbar';
import { EditorContent, useEditor } from '@tiptap/react';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import StarterKit from '@tiptap/starter-kit';

function MyTemplate() {
	const [templateContent, setTemplateContent] = useState('');

	const editor = useEditor({
		templateContent,
		editorProps: {
			attributes: {
				class: '',
			},
		},
		extensions: [
			Heading.configure({ levels: [1, 2, 3] }),
			Link.configure({ openOnClick: false }),
			StarterKit,
		],
		onUpdate() {
			const html = this.getHTML();
			setTemplateContent(html);
		},
	});
	const toast = useToast();

	async function saveChangelogTemplate() {
		// Save the template to Supabase in user profile
		toast({
			title: 'Saved!',
			status: 'success',
			duration: 3000,
			isClosable: true,
			position: 'top-right',
		});
	}

	return (
		<SettingsLayout>
			<VStack w='full' alignItems='start' spacing={8}>
				<chakra.h2 fontSize='2xl' mb={8}>
					Your Changelog Template
				</chakra.h2>
				<Box w='full' h='auto' minH='600px'>
					<EditorToolbar editor={editor} />
					<EditorContent editor={editor} />
				</Box>
				<HStack
					w='full'
					d='flex'
					alignItems='center'
					justifyContent='flex-start'
					spacing={4}
				>
					<Button colorScheme='brand' onClick={saveChangelogTemplate}>
						Save
					</Button>
				</HStack>
			</VStack>
		</SettingsLayout>
	);
}

export default MyTemplate;
