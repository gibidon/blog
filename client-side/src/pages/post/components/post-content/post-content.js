import { H2, Icon } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { SpecialPanel } from '../special-panel/special-panel';
import { styled } from 'styled-components';
import { useConsoleLog, useWindowSize } from '../../../../hooks';
import { PROP_TYPE } from '../../../../constants';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate();

	useConsoleLog();
	useWindowSize();

	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={
					<Icon
						id="fa-pencil-square-o"
						size="21px"
						margin="0 10px 0 0"
						onClick={() => {
							navigate(`/post/${id}/edit`);
						}}
					/>
				}
			/>
			<div className="post-text">{content}</div>
		</div>
	);
	// return (
	// 	<div className={className}>
	// 		{side}
	// 		<p>static info to check</p>
	// 		<img src={post.imageUrl} alt={post.title} />
	// 		<H2>{post.title}</H2>
	// 		<div className="special-panel">{post.publishedAt}</div>
	// 		<div>{post.content}</div>
	// 	</div>
	// );
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space:pre-line:
	}
`;

PostContent.propTypes = { post: PROP_TYPE.POST.isRequired };
