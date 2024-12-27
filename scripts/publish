#!/bin/bash -e

dir="$( cd "$( dirname "$0" )" && pwd )"
cd $dir/.. || exit

bucket="${S3_BUCKET_NAME}"

echo "Pushing site data..."

aws s3 sync dist/. "s3://$bucket" --delete

echo "Invalidating cloudfront distribution..."

aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_ID" --paths "/*"

echo "✨ Done"