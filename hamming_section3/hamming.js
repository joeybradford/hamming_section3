var compute;

compute = function(strand1,strand2)
{
	var distance = 0;

	if (strand1.length == strand2.length)
	{
		

		for (var i = 0; i <strand1.length; i++) 
		{
		
			if (strand2.substring(i,i+1) != strand1.substring(i,i+1))
			{
				distance++;
			}
		}
	}
	else
	{
		throw new Error('DNA strands must be of equal length.');
	}

	/*
		calculate the actual Hamming Distance
	*/

	//optput the hamming distance
	return distance;
};


module.exports = {
	compute: compute
};