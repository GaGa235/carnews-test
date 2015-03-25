#!/usr/bin/env python
# -*- coding: utf-8 -*-
import jinja2
import logging
import os
import webapp2


JINJA_ENVIRONMENT = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
  extensions=['jinja2.ext.autoescape'],
  autoescape=True)


class Main(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/index.html')
    self.response.write(template.render(template_values))


class BrandShow(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/brand_show.html')
    self.response.write(template.render(template_values))


class Brand(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/brand.html')
    self.response.write(template.render(template_values))


class Compare(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/compare.html')
    self.response.write(template.render(template_values))


class Keyword(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/keyword.html')
    self.response.write(template.render(template_values))


class Movie(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/movie.html')
    self.response.write(template.render(template_values))


class MovieSub(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/movie_sub.html')
    self.response.write(template.render(template_values))


class News(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/news.html')
    self.response.write(template.render(template_values))


class NewCar(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/new_car.html')
    self.response.write(template.render(template_values))


class NewCarInfo(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/news_info.html')
    self.response.write(template.render(template_values))


class Option(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/option.html')
    self.response.write(template.render(template_values))


class Pic(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/pic-preview.html')
    self.response.write(template.render(template_values))


class PicShow(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/pic-show.html')
    self.response.write(template.render(template_values))


class Refit(webapp2.RequestHandler):
  def get(self):
    template_values = {}
    template = JINJA_ENVIRONMENT.get_template('/template/refit.html')
    self.response.write(template.render(template_values))

application = webapp2.WSGIApplication([
  ('/', Main),
  ('/brandshow', BrandShow),
  ('/brand', Brand),
  ('/compare', Compare),
  ('/keyword', Keyword),
  ('/movie', Movie),
  ('/movie_sub', MovieSub),
  ('/news', News),
  ('/newcar', NewCar),
  ('/newcarinfo', NewCarInfo),
  ('/option', Option),
  ('/pic', Pic),
  ('/picshow', PicShow),
  ('/refit', Refit),


], debug=True)
