FROM php:8.4
WORKDIR /back
# composerをインストール
COPY --from=composer:2.8 /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1
# パッケージのインストールとキャッシュ削除
RUN apt-get update && \
    apt-get install -y zip unzip git rsync && \
    rm -rf /var/lib/apt/lists/* && \
    docker-php-ext-install pdo_mysql
# 依存関係ファイルのみコピーしてキャッシュを効かせる
COPY composer.json composer.lock ./
RUN composer install --no-scripts
# マウント外にコピー
RUN mv vendor /opt/vendor
COPY . .
# vendor同期用スクリプト作成
RUN printf '#!/bin/bash\n\
set -e\n\
[ ! -d /back/vendor ] || [ -z "$(ls -A /back/vendor 2>/dev/null)" ] && \
cp -r /opt/vendor /back/vendor || \
rsync -au --quiet /opt/vendor/ /back/vendor/\n\
exec "$@"\n' > /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]
EXPOSE 8000
