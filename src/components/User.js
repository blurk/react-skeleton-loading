import React, { useEffect, useState } from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		/*     Using settimeout to see the skeleton while coding */
		setTimeout(async () => {
			const rs = await fetch('http://jsonplaceholder.typicode.com/users/1');
			const data = await rs.json();
			setProfile(data);
		}, 5000);
	});

	return (
		<div className='user'>
			<h2>User detail</h2>
			{profile && (
				<div className='profile'>
					<h3>{profile.username}</h3>
					<p>{profile.email}</p>
					<a href={profile.website}>{profile.website}</a>
				</div>
			)}

			{!profile && <SkeletonProfile theme='light' />}
		</div>
	);
};

export default User;
