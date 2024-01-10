import { useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Icon, Input } from '../../../../components';

import { SpecialPanel } from '../special-panel/special-panel';
import { savePostAsync } from '../../../../actions';
import { sanitizeContent } from './utils';
import { styled } from 'styled-components';
import { PROP_TYPE } from '../../../../constants';

const PostFormContainer = ({ className, post: { id, title, imageUrl, content, publishedAt } }) => {
	const contentRef = useRef(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(id, {
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => {
			navigate(`/post/${id}`);
		});
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);

	return (
		<div className={className}>
			<Input value={imageUrlValue} placeholder="Изображение.." onChange={onImageChange} />
			<Input value={titleValue} placeholder="Заголовок.." onChange={onTitleChange} />
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={<Icon id="fa-floppy-o" size="21px" margin="0 10px 0 0" onClick={onSave} />}
			/>
			<div
				className="post-text"
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		white-space: pre-line;
		min-height: 80px;
		border: 1px solid #000;
		font-size: 18px;
	}
`;

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
