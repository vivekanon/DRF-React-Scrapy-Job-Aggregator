# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


from api.models import Posting

class ScrapyAppPipeline(object):
    def process_item(self, item, spider):
        item = Posting(description=item.get('text'), company_name=item.get('author'), title=item.get('author'))
        item.save()
        return item