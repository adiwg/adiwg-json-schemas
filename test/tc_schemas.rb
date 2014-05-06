=begin
* Description: Test Validation of examples schemas and templates
* Author: Josh Bradley, Stan Smith
* Date: 2014-05-02
* License: Public Domain
=end

require "test/unit"
require 'adiwg/json_schemas'
require 'json-schema'

class TestExamples < Test::Unit::TestCase

  @@dir = ADIWG::JsonSchemas::Utils.schema_dir
  @@ex = ADIWG::JsonSchemas::Utils.examples_dir
  @@schema = ADIWG::JsonSchemas::Utils.schema_path

=begin  def test_example
    errors = JSON::Validator.fully_validate(@@schema, @@data)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_full
    errors = JSON::Validator.fully_validate(@@schema, @@ex + 'full_example.json')
    assert(errors.empty?, errors.join("/n"))
  end
=end
  def test_data_template
    errors = JSON::Validator.fully_validate(@@schema, @@dir + '../templates/adiwg_metadata_template.json')
    assert(errors.empty?, errors.join("/n"))
  end

  def test_lcc_example
    errors = JSON::Validator.fully_validate(@@schema , @@ex + 'lcc_project_example.json')
    assert(errors.empty?, errors.join("/n"))
  end

  def test_contact
    errors = JSON::Validator.fully_validate(@@dir + 'schema/contact.json', @@ex + 'contact.json')
    assert(errors.empty?, errors.join("/n"))
  end

  def test_citation
    errors = JSON::Validator.fully_validate(@@dir + 'schema/citation.json', @@ex + 'citation.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_taxonomy
    errors = JSON::Validator.fully_validate(@@dir + 'schema/taxonomy.json', @@ex + 'taxonomy.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_usage
    errors = JSON::Validator.fully_validate(@@dir + 'schema/usage.json', @@ex + 'usage.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_resolution
    errors = JSON::Validator.fully_validate(@@dir + 'schema/resolution.json', @@ex + 'resolution.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_graphicOverview
    errors = JSON::Validator.fully_validate(@@dir + 'schema/graphicOverview.json', @@ex + 'graphicOverview.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_resourceInfo
    errors = JSON::Validator.fully_validate(@@dir + 'schema/resourceInfo.json', @@ex + 'resourceInfo.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_onlineResource
    errors = JSON::Validator.fully_validate(@@dir + 'schema/onlineResource.json', @@ex + 'onlineResource.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_resourceConstraint
    errors = JSON::Validator.fully_validate(@@dir + 'schema/resourceConstraint.json', @@ex + 'resourceConstraints.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_date
    errors = JSON::Validator.fully_validate(@@schema, @@ex + 'date.json', :fragment => "#/definitions/date", :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_contactRef
    errors = JSON::Validator.fully_validate(@@dir + 'schema/contact.json', @@ex + 'contactRef.json', :fragment => "#/definitions/contactRef", :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_keywords
    errors = JSON::Validator.fully_validate(@@dir + 'schema/keyword.json', @@ex + 'keywords.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_distributor
    errors = JSON::Validator.fully_validate(@@dir + 'schema/distributor.json', @@ex + 'distributor.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_geojson
    errors = JSON::Validator.fully_validate(@@dir + 'schema/geojson/geojson.json', @@ex + 'geojson.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_extent_linestring
    errors = JSON::Validator.fully_validate(@@dir + 'schema/extent.json', @@ex + 'extent_linestring.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_extent_point
    errors = JSON::Validator.fully_validate(@@dir + 'schema/extent.json', @@ex + 'extent_point.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_extent_polygon
    errors = JSON::Validator.fully_validate(@@dir + 'schema/extent.json', @@ex + 'extent_polygon.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_maintInfo
    errors = JSON::Validator.fully_validate(@@dir + 'schema/maintInfo.json', @@ex + 'maintInfo.json', :list => true)
    errors = errors + JSON::Validator.fully_validate(@@dir + 'schema/maintInfo.json', @@ex + 'resourceMaintenance.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end

  def test_dataQuality
    errors = JSON::Validator.fully_validate(@@dir + 'schema/dataQuality.json', @@ex + 'dataQuality.json', :list => true)
    assert(errors.empty?, errors.join("/n"))
  end
end