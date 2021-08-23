import { useState } from 'react';
import NextLink from 'next/link';
import { chakra, Button, useColorModeValue, VStack } from '@chakra-ui/react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import { FaChevronLeft } from 'react-icons/fa';
import DefaultLayout from '../../components/app/layouts/Default';
import ChangelogEditor from '../../components/app/admin/ChangelogEditor';
import { publishChangelog, saveChangelog } from '../../lib/utils';

function New() {
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
		extensions: [
			Heading.configure({ levels: [1, 2, 3] }),
			Link.configure({ openOnClick: false }),
			StarterKit,
		],
		onUpdate() {
			const html = this.getHTML();
			setContent(html);
		},
	});

	async function saveHandler() {
		await saveChangelog(title, content, changelog, setChangelog);
	}

	async function publishHandler() {
		await publishChangelog(title, content, changelog, setChangelog);
	}

	return (
		<DefaultLayout>
			<VStack
				py={8}
				w='full'
				d='flex'
				alignItems='start'
				justifyContent='start'
				spacing={8}
			>
				<chakra.a>
					<NextLink href='/app'>
						<Button
							variant='outline'
							borderWidth={1}
							borderColor={useColorModeValue('gray.400', 'white')}
							color={useColorModeValue('gray.400', 'white')}
							w={10}
							h={10}
							p={0}
						>
							<FaChevronLeft />
						</Button>
					</NextLink>
				</chakra.a>
				<ChangelogEditor
					editor={editor}
					publishChangelog={publishHandler}
					saveChangelog={saveHandler}
					setTitle={setTitle}
					title={title}
				/>
			</VStack>
		</DefaultLayout>
	);
}

export default New;
