class Video:

    collection = None

    def __init__(self):
        self.collection = 'videos'

    def get_collection_name(self):
        return self.collection

    def create(self, post):
        return post
